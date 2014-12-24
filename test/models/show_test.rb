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

require 'test_helper'

class ShowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
