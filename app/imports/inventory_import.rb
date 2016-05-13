class InventoryImport
  extend ActiveModel::Model
  include ActiveModel::Conversion
  include ActiveModel::Validations
  include Mixins::Import

  def load_imported_records
    spreadsheet = open_spreadsheet
    header = spreadsheet.row(1)

    (1..spreadsheet.last_row).map do |i|
    	row = Hash[[header, spreadsheet.row(i)].transpose]
    end
  end

end
