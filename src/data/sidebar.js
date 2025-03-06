export const sidebarUrlList = [
  {
    parentLabel: "Admin",
    children: [
      {
        label: "Dashboard",
        url: "/admin/",
      },
      {
        label: "Instructor Create",
        url: "/admin/create-instructor",
      },
      {
        label: "Assign course",
        url: "/admin/assign-course",
      },
    ],
  },
  {
    parentLabel: "Course",
    children: [
      {
        label: "Course List",
        url: "/admin/course",
      },
      {
        label: "Course Create",
        url: "/admin/course-create",
      },
    ],
  },
  {
    parentLabel: "Milestone",
    children: [
      {
        label: "Milestone List",
        url: "/admin/milestone",
      },
      {
        label: "Milestone Create",
        url: "/admin/milestone-create",
      },
    ],
  },
  {
    parentLabel: "Module",
    children: [
      {
        label: "Module List",
        url: "/admin/module",
      },
      {
        label: "Module Create",
        url: "/admin/module-create",
      },
    ],
  },
  {
    parentLabel: "Video",
    children: [
      {
        label: "Video List",
        url: "/admin/video",
      },
      {
        label: "Video Create",
        url: "/admin/video-create",
      },
    ],
  },
  {
    parentLabel: "Question",
    children: [
      {
        label: "Question Create",
        url: "/admin/question-create",
      },
    ],
  },
  // ✅ Logout button added dynamically
  {
    parentLabel: "Account",
    children: [
      {
        label: "Logout",
        onClick: () => {
          console.log("Logging out...");
          // Replace with actual logout function
          // Example: logoutUser();
        },
      },
    ],
  },
];
