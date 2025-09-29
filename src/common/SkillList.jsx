function SkillList({ src, skill, logo }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      {logo && <img src={logo} alt={`${skill} logo`} className="tech-logo" />}
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;