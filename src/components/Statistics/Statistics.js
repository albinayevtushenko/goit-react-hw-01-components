import PropTypes from 'prop-types';
import {
  Title,
  StatsList,
  Section,
  ListItem,
  Label,
  Parcentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  if (!title) {
    return '';
  }

  return (
    <Section>
      <Title>{title}</Title>
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <Label>{label}</Label>
            <Parcentage>{percentage}%</Parcentage>
          </ListItem>
        ))}
      </StatsList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
