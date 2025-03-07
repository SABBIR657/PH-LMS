// export const sidebarUrlList = [
//   {
//     parentLabel: "Admin",
//     children: [
//       {
//         label: "Dashboard",
//         url: "/admin/",
//       },
//       {
//         label: "Instructor Create",
//         url: "/admin/create-instructor",
//       },
//       {
//         label: "Assign course",
//         url: "/admin/assign-course",
//       },
//     ],
//   },
//   {
//     parentLabel: "Course",
//     children: [
//       {
//         label: "Course List",
//         url: "/admin/course",
//       },
//       {
//         label: "Course Create",
//         url: "/admin/course-create",
//       },
//     ],
//   },
//   {
//     parentLabel: "Milestone",
//     children: [
//       {
//         label: "Milestone List",
//         url: "/admin/milestone",
//       },
//       {
//         label: "Milestone Create",
//         url: "/admin/milestone-create",
//       },
//     ],
//   },
//   {
//     parentLabel: "Module",
//     children: [
//       {
//         label: "Module List",
//         url: "/admin/module",
//       },
//       {
//         label: "Module Create",
//         url: "/admin/module-create",
//       },
//     ],
//   },
//   {
//     parentLabel: "Video",
//     children: [
//       {
//         label: "Video List",
//         url: "/admin/video",
//       },
//       {
//         label: "Video Create",
//         url: "/admin/video-create",
//       },
//     ],
//   },
//   {
//     parentLabel: "Question",
//     children: [
//       {
//         label: "Question Create",
//         url: "/admin/question-create",
//       },
//     ],
//   },
//   // ✅ Logout button added dynamically
//   {
//     parentLabel: "Account",
//     children: [
//       {
//         label: "Logout",
//         onClick: () => {
//           console.log("Logging out...");
//           // Replace with actual logout function
//           // Example: logoutUser();
//         },
//       },
//     ],
//   },
// ];

export const sidebarUrlList = [
  {
    parentLabel: "Admin",
    roles: ["admin"], // 👈 Only admins can see this section
    children: [
      {
        label: "Dashboard",
        url: "/admin/",
        roles: ["admin"],
      },
      {
        label: "Instructor Create",
        url: "/admin/create-instructor",
        roles: ["admin"],
      },
      {
        label: "Assign course",
        url: "/admin/assign-course",
        roles: ["admin"],
      },
    ],
  },
  {
    parentLabel: "Course",
    roles: ["admin", "instructer"], // 👈 Both admin & instructor can see this
    children: [
      {
        label: "Course List",
        url: "/admin/course",
        roles: ["admin", "instructer"],
      },
      {
        label: "Course Create",
        url: "/admin/course-create",
        roles: ["admin"], // 👈 Only admin can create courses
      },
    ],
  },
  {
    parentLabel: "Milestone",
    roles: ["admin", "instructer"],
    children: [
      {
        label: "Milestone List",
        url: "/admin/milestone",
        roles: ["admin", "instructer"],
      },
      {
        label: "Milestone Create",
        url: "/admin/milestone-create",
        roles: ["admin"], // 👈 Only admin can create milestones
      },
    ],
  },
  {
    parentLabel: "Module",
    roles: ["admin", "instructer"],
    children: [
      {
        label: "Module List",
        url: "/admin/module",
        roles: ["admin", "instructer"],
      },
      {
        label: "Module Create",
        url: "/admin/module-create",
        roles: ["admin"], // 👈 Only admin can create modules
      },
    ],
  },
  {
    parentLabel: "Video",
    roles: ["admin", "instructer"],
    children: [
      {
        label: "Video List",
        url: "/admin/video",
        roles: ["admin", "instructer"],
      },
      {
        label: "Video Create",
        url: "/admin/video-create",
        roles: ["admin"], // 👈 Only admin can create videos
      },
    ],
  },
  {
    parentLabel: "Question",
    roles: ["admin", "instructer"],
    children: [
      {
        label: "Question Create",
        url: "/admin/question-create",
        roles: ["admin", "instructer"],
      },
    ],
  },
  {
    parentLabel: "Account",
    roles: ["admin", "instructer"],
    children: [
      {
        label: "Logout",
        onClick: () => {
          console.log("Logging out...");
          // Replace with actual logout function
        },
        roles: ["admin", "instructer"],
      },
    ],
  },
];
