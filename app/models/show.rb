# == Schema Information
#
# Table name: shows
#
#  id          :integer          not null, primary key
#  date        :string(255)
#  venue       :string(255)
#  city        :string(255)
#  state       :string(255)
#  tickets_url :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Show < ActiveRecord::Base
  validates :date, :venue, :city, :state, presence: true
end
