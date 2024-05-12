function ScrumTeamMember(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
  }
  
  export const ScrumRoles = [
    new ScrumTeamMember(
      'Scrum Master',
      'scrumMaster.jpg',
      'A Scrum Master helps to lead and coordinate a Scrum team by ensuring that the team adheres to the principles and practices of the Scrum methodology. Their main tasks include facilitating meetings (such as daily stand-ups, sprint planning, and retrospectives), assisting in resolving impediments encountered by the team, and acting as a liaison between the Product Owner and the development team to ensure a smooth workflow. The Scrum Master also works on coaching the team in self-organization and continuous improvement.'
    ),
   new ScrumTeamMember(
      'Product Owner',
      'productOwner1.jpg',
      'A Product Owner in Scrum is primarily responsible for maximizing the value of the product being developed by the team. This role involves creating and prioritizing the product backlog, which is a list of all tasks and features to be developed. The Product Owner must also ensure that the backlog is clear and understandable to everyone on the team and that it is continually adapted based on business goals and customer feedback. Additionally, the Product Owner serves as a key communicator between stakeholders and the development team to convey the vision and requirements of the product.'
    ),
    new ScrumTeamMember(
      'Developers',
      'developTeam.jpg',
      'A development team in Scrum consists of professionals who execute the work to deliver the final product. The team is cross-functional and includes all necessary competencies such as programmers, designers, testers, and sometimes architects and database experts. They are self-organizing, meaning they determine how the work is done and who does what. The team prioritizes collaboration, flexibility, and quick adaptation to changes. Through regular communication and feedback loops, they ensure that their work continually adds value to the product.'
    )
];
  
function ScrumValue(title, description){
  this.title = title;
  this.description = description;
}

export const ScrumValues = [
  new ScrumValue (
    "Commitment",
    "Scrum teams must fully commit to their project, ensuring each member contributes effectively to the goals. Commitment is reinforced by Scrum masters through careful sprint planning and shielding the team from scope changes and undue pressure." 
  ),
  new ScrumValue (
    "Focus",
    "Focus is crucial in Scrum sprints, where team members concentrate on tasks that enhance the product's value, prioritize the most important activities, and strive to complete work within the sprint." 
  ),
  new ScrumValue (
    "Respect",
    "Respect is crucial within Scrum teams, where members view each other as skilled professionals. This involves appreciating each other's unique expertise and perspectives, enriching team dynamics and leading to more innovative solutions."
  ),
  new ScrumValue (
    "Openness",
    "Openness is crucial within Scrum teams, where both members and stakeholders commit to maintaining transparency about all aspects of the work and any challenges encountered. This includes openly sharing challenges to quickly address them together, encouraging constructive feedback for continuous improvement."
  ),
  new ScrumValue (
    "Courage", 
    "Courage means being willing to tackle challenges, even when they are tough, and daring to explore the unknown. It involves being open to change and willing to share information and engage in respectful discussions even when opinions differ."
  )
]




