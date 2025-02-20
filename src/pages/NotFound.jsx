import { Divider } from '@heroui/react';
import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex justify-center items-center">
      <p className="font-bold text-2xl"> 404</p>
      <div className="h-12 mx-6">
        <Divider orientation="vertical" />
      </div>
      <p>This page could not be found.</p>
    </div>
  );
}
