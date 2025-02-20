import { Progress } from '@heroui/react';

const Loader = () => {
  return (
    <div className="max-w-md w-[93%] mx-auto  ">
      <div className="flex justify-center min-h-[60vh] items-center h-full ">
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        />
      </div>
    </div>
  );
};

export default Loader;
