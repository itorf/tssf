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

require 'test_helper'

class ShowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
