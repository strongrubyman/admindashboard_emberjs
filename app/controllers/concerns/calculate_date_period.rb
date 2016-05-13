module CalculateDatePeriod
  extend ActiveSupport::Concern

  def get_date_period
    week = params[:week].nil? || params[:week].empty? ? Date.current.cweek : params[:week].to_i
    week = Date.current.cweek if week.zero?

    year = Date.current.year

    {
      wk_begin: Date.commercial(year, week, 1),
      wk_end: Date.commercial(year, week, 7)
    }
  end
end
