module Mixins
	module Import
	  def open_spreadsheet
	    case File.extname(file.original_filename)
	      when ".csv" then return Roo::CSV.new(file.path)
	      when ".xls" then return Roo::Excel.new(file.path)
	      when ".xlsx" then return Roo::Excelx.new(file.path)
	      else raise "Something broke. Unknown file type: #{file.original_filename}"
	    end
	  end

	  attr_accessor :file, :date, :brewery_id

	  def initialize(attributes = {})
	    attributes.each { |name, value| send("#{name}=", value) }
	  end

	  def persisted?
	    false
	  end

	  def save
	    if imported_records.map(&:valid?).all?
	      imported_records.each(&:save!)
	      true
	    else
	      imported_records.each_with_index do |ps, index|
	        ps.errors.full_messages.each do |message|
	          errors.add :base, "Row #{index+2}: #{message}"
	        end
	      end
	      false
	    end
	  end

	  def imported_records
	    @imported_records ||= load_imported_records.compact
	  end

	  def load_imported_records
	  	# descendant implementation
	  end

	end
end
