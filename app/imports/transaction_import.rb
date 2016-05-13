class TransactionImport
  extend ActiveModel::Model
  include ActiveModel::Conversion
  include ActiveModel::Validations
  include Mixins::Import

  def load_imported_records
    records = []

    inventories = open_spreadsheet.sheet(0)

    (1..inventories.last_row).each do |i|
      row = Hash[[inventories.row(1), inventories.row(i)].transpose]

      records << Inventory.new(
        gpa_id: row['Item #'],
        pdcn: row['PDCN'],
        brand: row['Brand'],
        size: row['Size'],
        total_inventory: row['Total Inventory'],
        ship_date: date,
        brewery_id: brewery_id
      )
    end

    transactions = open_spreadsheet.sheet(1)

    (1..transactions.last_row).each do |i|
      row = Hash[[transactions.row(1), transactions.row(i)].transpose]

      records << Transaction.new(
        wholesaler: row['Wholesaler'],
        gpa_id: row['GPA ID'],
        brand: row['Brand'],
        size: row['Size'],
        on_hand_begin: row['On-Hand Begin'],
        sales_rate_per_day: row['Sales rate per day'],
        days_on_hand: row['Days on-hand'],
        inbound_units_t0: row['Inbound Units T-0'],
        inbound_units_t1: row['Inbound Units T+1'],
        pallets_shipping_t1: row['Pallets shipping T+1'],
        days_shipping_t1: row['Days shipping T+1'],
        net_days_t1: row['Net Days T+1'],
        units_packaging: row['Units Packaging'],
        ship_date: date,
        brewery_id: brewery_id,
        po_number: SecureRandom.uuid
      )
    end

    records
  end

end
