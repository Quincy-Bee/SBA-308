// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },

    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },

    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSub = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },

  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },

  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },

  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },

  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

const ids = [125, 132];

// 2. create learner objects
for (let learnerId of ids) {

  console.log("Learner id: " + learnerId);

  /*
  for(every value in submissions){
  does the learner id match?
      yes:
          add to the object
      no:
  }       skip it
  }
  */

  let score = 0;
  let totalPossible = 0;

  for (let i = 0; i < LearnerSub.length; i++) {

    if (learnerId === LearnerSub[i].learner_id) {

      console.log("submission score: " + LearnerSub[i].submission.score);

      score += LearnerSub[i].submission.score;

      totalPossible += getPointsPossible(
        AssignmentGroup.assignments,
        LearnerSub[i].assignment_id
      );

    }

  }

  console.log("total score: " + score);
  console.log("total possible: " + totalPossible);

  let learnerReport = {
    id: learnerId
  };

  console.log(learnerReport);

}

function getPointsPossible(assignmentsArray, assignmentId) {

  for (let j = 0; j < assignmentsArray.length; j++) {

    if (assignmentsArray[j].id === assignmentId) {

      console.log("they Match");
      console.log("points_possible: " + assignmentsArray[j].points_possible);

      return assignmentsArray[j].points_possible;
    }
  }

  return 0;
}

function getLearnerData(course, ag, submissions) {

  const result = [];
  const ids = [];

  for (let sub of submissions) {

    if (ids.includes(sub.learner_id) !== true) {
      ids.push(sub.learner_id);
    }

  }

  console.log(ids);

  return result;

}

const result = getLearnerData(
  CourseInfo,
  AssignmentGroup,
  LearnerSub
);

console.log(result);