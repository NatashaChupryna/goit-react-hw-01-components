// import PropTypes from 'prop-types';
// import {
//   StatisticsSection,
//   StatList,
//   ListItem,
//   DataSpan,
// } from './Statistics.styled';
// import getRandomColor from '../utils/randomColor';

// export default function Statistics({ title, stats }) {
//   return (
//     <StatisticsSection>
//       {title.length > 0 ? <h2>{title}</h2> : <h2></h2>}
//       <StatList>
//         {stats.map(({ id, label, percentage }) => {
//           return (
//             <ListItem
//               style={{ backgroundColor: `${getRandomColor()}` }}
//               key={id}
//             >
//               <DataSpan>{label}</DataSpan>
//               <DataSpan>{percentage}%</DataSpan>
//             </ListItem>
//           );
//         })}
//       </StatList>
//     </StatisticsSection>
//   );
// }

// Statistics.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }).isRequired
//   ),
// };
