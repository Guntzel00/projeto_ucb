import './Btn.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Btn({ label, referencia }) {
	return (
		<>
			<Link className='btn' to={referencia}>
				{label}
			</Link>
		</>
	);
}

Btn.propTypes = {
	label: PropTypes.string.isRequired, // O label deve ser uma string e é obrigatório
	referencia: PropTypes.string.isRequired, // A referência deve ser uma string e é obrigatória
};

export default Btn;
