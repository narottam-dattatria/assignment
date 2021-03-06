import React from 'react';
import { useNavigate } from 'react-router-dom';
import { response } from '../response';

// const index = 0;

function LeaderBoard(props) {
	const history = useNavigate();
	return (
		
		<div className="text-center mt-50">
			<div>
				<div>
					<button data-testid="route-rank" className='outlined' type="button" onClick={() => history(`/rank`)}>Rank</button>
					<button data-testid="route-name" className='outlined' type="button"  onClick={() => history(`/name`)}>Name</button>
					<button data-testid="route-points" className='outlined' type="button" onClick={() => history(`/points`)}>Points</button>
					<button data-testid="route-age" className='outlined' type="button" onClick={() => history(`/age`)}>Age</button>
				</div>
			</div>
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
					<tbody data-testid="app-tbody">
						{response.list.map(({rank, name, points, age}, index) => <tr key={rank}>
							<td data-testid={`rank-${index}`}>{rank}</td>
							<td data-testid={`name-${index}`}>{name}</td>
							<td data-testid={`points-${index}`} className="numeric">{points}</td>
							<td data-testid={`age-${index}`} className="numeric">{age}</td>
						</tr>)}
					
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;
