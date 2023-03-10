require "exam.rb"

RSpec.describe Exam do
    it "initialises with a subject, student, pass mark and score" do
        exam = Exam.class("Maths", "Samir", 75, 99)
        expect(exam.subject).to eq "Maths"
        expect(exam.student).to eq "Samir"
        expect(exam.pass_mark).to eq 75
        expect(exam.score).to eq 99
    end
    it "initialises recognises whether student passed" do
        exam = Exam.class("Physics", "Samir", 75, 83)
        expect(exam.passed?).to eq true
        exam = Exam.class("Geography", "Samir", 77, 52)
        expect(exam.passed?).to eq false
    end
    it "initialises produces a report" do
        exam = Exam.class("Maths", "Boris", 75, 45)
        expect(exam.report).to eq "Boris failed Maths with a score of 45%, needing 75% to pass"
        exam = Exam.class("English", "Byron", 70, 98)
        expect(exam.report).to eq "Byron passed English with a score of 98%, needing 70% to pass"
    end
end