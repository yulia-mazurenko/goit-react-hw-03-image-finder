import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="150"
      width="150"
      ariaLabel="vortex-loading"
      wrapperStyle={{
        display: 'block',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  );
};

export default Loader;
