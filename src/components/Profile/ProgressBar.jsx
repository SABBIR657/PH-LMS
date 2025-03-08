import ProfilePage from "./ProfileContent/ProfilePage";

export default function ProgressBar({ value }) {
  return (
    <div className="w-full mt-4">
      <div className="flex justify-between text-xs text-gray-400">
        <span>Complete your profile</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-2 mt-1 bg-gray-700 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
