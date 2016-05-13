class ProductImport
  extend ActiveModel::Model
  include ActiveModel::Conversion
  include ActiveModel::Validations
  include Mixins::Import

  def load_imported_records
    spreadsheet = open_spreadsheet.sheet(0)
    header = spreadsheet.row(1)

    (1..spreadsheet.last_row).map do |i|
      row = Hash[[header, spreadsheet.row(i)].transpose]

      Product.new(
        gpa_id: row['GPA ID'],
        brand: row['Brand'],
        pkg: row['PKG'],
        size: row['Size'],
        group: row['Group'],
        brew_id: row['Brew ID'],
        oz: row['OZ'],
        pallet_qty: row['Pallet Qty'],
        layer_qty: row['Layer Qty'],
        layers_per_pallet: row['Layers Per Pallet'],
        status: row['Status (on/off)'],
        pdcn: row['PDCN'],
        ship_date: date,
        brewery_id: brewery_id
      )

    end
  end

end
