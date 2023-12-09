// Summing an array of numbers:

const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property

    const totalExperience = teamMembers.reduce((acc, member) => acc + member.yrsExperience, 0);
    console.log(totalExperience); // 16
  
  // Grouping by a property, and totaling it too

    const experienceByProfession = teamMembers.reduce((acc, member) => {
      const key = member.profession;
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] += member.yrsExperience;
      return acc;
    }
    , {});
    console.log(experienceByProfession); // { Developer: 12, Designer: 4 }
    