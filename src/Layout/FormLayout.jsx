import { Navbar, SupervisorForm } from 'components';

const FormLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar heading={'Notification Form'} />
    <div className="flex-grow bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <SupervisorForm />
      </div>
    </div>
  </div>
);

export default FormLayout;
