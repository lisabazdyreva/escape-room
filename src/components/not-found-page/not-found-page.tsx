import { MainLayout, ErrorInformation } from '../common/common';
import { ErrorMessage } from '../../const';


const NotFoundPage = () => {
  return(
    <MainLayout>
      <ErrorInformation message={ErrorMessage.NonExistPage}/>
    </MainLayout>
  )
}
export default NotFoundPage;
