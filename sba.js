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
  console.log("Learner id: " +learnerId)


  /*
  for(every value in submissions){
  does the learner id match?
      yes:
          add to the object
      no:
  }       skip it
  }
  */  

  // need a variable to store totals.
  let score = 0

  for(let i = 0; i < LearnerSubmissions.length; i++){

    if (learnerId === LearnerSubmissions[i].learner_id){
      console.log(LearnerSubmissions[i].submission.score)
      score += LearnerSubmissions[i].submission.score
      console.log(ag.assignments[0].points_possible)

    }

  }
  console.log("total score: " +score)

  //submission [0]

  let learnerReport = {
    id: learnerId
  }

  console.log(learnerReport)

}

// function getLearnerData(course, ag, submissions) {
// //   // here, we would process this data to achieve the desired result.
  

// array of learner report objects
  // const result = []

// keep track of learner ids
  // const ids =[]

  // 1. find unique learners (figuring out hw many learners there are (and how many report objects we need))
for (let sub of submissions){
  //check for the learner id in the array (make sure their unique
  if (ids.includes(sub.learner_id) !==true) {
    ids.push(sub.learner_id); 
  }
}
  // //     {
// //       id: 125,
// //       avg: 0.985, // (47 + 150) / (50 + 150)
// //       1: 0.94, // 47 / 50
// //       2: 1.0 // 150 / 150
// //     },
// //     {
// //       id: 132,
// //       avg: 0.82, // (39 + 125) / (50 + 150)
// //       1: 0.78, // 39 / 50
// //       2: 0.833 // late: (140 - 15) / 150
// //     }
// //   ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSub);

// console.log(result);

// // let learnerID1 = 125;
// // let learnerID2 = 132;

// // console.log(learnerID1, learnerID2)