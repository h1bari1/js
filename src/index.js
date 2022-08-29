import './styles/index.scss'
import Index from "components/Header";
import {helperCreateId} from "helpers/helperCreate";
const root = document.getElementById('root')
root.append(Index());
root.append(helperCreateId('div','main'))
