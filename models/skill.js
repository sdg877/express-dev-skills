const skills = [
    {id: 1, skill: 'JavaScript', level: 'beginner'},
    {id: 2, skill: 'HTML', level: 'intermediate'},
    {id: 3, skill: 'CSS', level: 'intermediate'},
    {id: 4, skill: 'Python', level: 'beginner'}
]

module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }