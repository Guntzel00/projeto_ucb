import './Btn.css';
import PropTypes from 'prop-types';

function Btn({ label, referencia }) {
	return (
		<>
			<a className='btn' href={referencia}>
				{label}
			</a>
		</>
	);
}

Btn.propTypes = {
	label: PropTypes.string.isRequired, // O label deve ser uma string e é obrigatório
	referencia: PropTypes.string.isRequired, // A referência deve ser uma string e é obrigatória
};

export default Btn;
