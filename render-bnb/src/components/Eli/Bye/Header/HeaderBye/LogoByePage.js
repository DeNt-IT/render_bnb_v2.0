import '../../../../../css/Eli/ByePage/ByePageHeader.css';
import { useNavigate } from 'react-router-dom';


const LogoByePage = () =>
    {
        const navigate = useNavigate();

        function handleClickHome(event) {

            navigate('/');
        }

          return (
                <div className = "logoByePage" onClick={handleClickHome}>
                    HomeFU
                </div>
        );
    };
    
export default LogoByePage;