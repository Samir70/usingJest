require "exam"

class CohortReport
    def initialize(subject, students, scores, pass_mark)
        @subject = subject
        @final_scores = []

        for i in [1..students.length]
            student = Exam.new(subject, students[i], pass_mark, scores[i])
            @final_scores << student
        end
    end

    attr_reader :subject, :final_scores, :scores, :pass_mark
end