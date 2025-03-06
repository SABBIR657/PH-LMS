import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Skeleton from "../../components/ReusedabaleComponenet/Skeleton";
import { getData } from "../../helpers/axios";

const Dashboard = () => {
  const [instructorsCount, setInstructorsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [modulesCount, setModulesCount] = useState(0);
  const [videosCount, setVideosCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all instructors
        const instructorsData = await getData(
          "https://ph-clone-alchemy.onrender.com/api/v1/user/getAllInstructors"
        );
        if (instructorsData?.data) {
          setInstructorsCount(instructorsData.data.length);
        }

        // Fetch all students
        const studentsData = await getData(
          "https://ph-clone-alchemy.onrender.com/api/v1/user/getAllStudents"
        );
        if (studentsData?.data) {
          setStudentsCount(studentsData.data.length);
        }

        // Fetch all modules
        const modulesData = await getData(
          "https://ph-clone-alchemy.onrender.com/api/v1/module/all-modules"
        );
        if (modulesData?.data) {
          setModulesCount(modulesData.data.length);
        }

        // Fetch all videos
        const videosData = await getData(
          "https://ph-clone-alchemy.onrender.com/api/v1/video/all-videos"
        );
        if (videosData?.data) {
          setVideosCount(videosData.data.length);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later."); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  // 🔄 Function to reload the webpage
  const handleRefresh = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="space-y-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-400">
          Dashboard Overview
        </h1>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Instructor Card */}
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">
              Instructors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-black">{instructorsCount}</p>
          </CardContent>
        </Card>

        {/* Student Card */}
        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">
              Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-black">{studentsCount}</p>
          </CardContent>
        </Card>

        {/* Module Card */}
        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">
              Modules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-black">{modulesCount}</p>
          </CardContent>
        </Card>

        {/* Video Card */}
        <Card className="bg-orange-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">
              Videos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-black">{videosCount}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
