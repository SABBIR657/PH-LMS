import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Skeleton  from "../../components/ReusedabaleComponenet/Skeleton";
import { getData } from "../../helpers/axios";

const Dashboard = () => {
  const [instructorsCount, setInstructorsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [modulesCount, setModulesCount] = useState(0);
  const [videosCount, setVideosCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all instructors
        const instructorsData = await getData(
          "https://ph-clone-alchemy.onrender.com/api/v1/user/getAllInstructors"
        );
        // const instructorsData = await instructorsResponse.json();
        // setInstructorsCount(instructorsData.data.length);
        // console.log("instructorrrr",instructorsData)
        setInstructorsCount(instructorsData?.data.length)
        // console.log("instructor data", instructorsData);

        // Fetch all students
        const studentsData = await getData(
          "https://ph-clone-alchemy.onrender.com/api/v1/user/getAllStudents"
        );
        
        setStudentsCount(studentsData?.data.length);

        // Fetch all modules
        const modulesData = await getData(
          "https://ph-clone-alchemy.onrender.com/api/v1/module/all-modules"
        );
        // const modulesData = await modulesResponse.json();
        setModulesCount(modulesData?.data.length);

        // Fetch all videos
        const videosData = await getData(
          "https://ph-clone-alchemy.onrender.com/api/v1/video/all-videos"
        );
      
        setVideosCount(videosData?.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Instructor Card */}
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Instructors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-black">{instructorsCount}</p>
          </CardContent>
        </Card>

        {/* Student Card */}
        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-black">{studentsCount}</p>
          </CardContent>
        </Card>

        {/* Module Card */}
        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-black">{modulesCount}</p>
          </CardContent>
        </Card>

        {/* Video Card */}
        <Card className="bg-orange-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Videos</CardTitle>
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
