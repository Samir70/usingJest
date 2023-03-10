require "cohort_report"

RSpec.describe CohortReport do
  it "initialises with names, scores and pass mark" do
    cr = CohortReport.new("Maths", ["Rishi", "Liz", "Boris", "Theresa"], [88, 78, 45, 89], 75)
    expect(cr.final_scores.first.report).to eq "Rishi passed Maths with a score of 88%, needing 75% to pass"
  end
end
