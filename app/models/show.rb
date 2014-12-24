# == Schema Information
#
# Table name: shows
#
#  id          :integer          not null, primary key
#  venue       :string(255)
#  city        :string(255)
#  state       :string(255)
#  tickets_url :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  date        :date
#

class Show < ActiveRecord::Base
  validates :date, :venue, :city, :state, presence: true
end
