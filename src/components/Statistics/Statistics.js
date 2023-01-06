import PropTypes from 'prop-types';
import { StatisticsSection, StatList, ListItem } from './Statistics.styled';
import getRandomColor from '../utils/randomColor';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      <h2 className="title">{title}</h2>
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem
              style={{ backgroundColor: `${getRandomColor()}` }}
              key={id}
            >
              <span>{label}</span>
              <span>{percentage}%</span>
            </ListItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
