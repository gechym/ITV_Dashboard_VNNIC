// import React from "react";
// import { 
//   BarChart, 
//   Bar, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend, 
//   PieChart, 
//   Pie, 
//   Cell 
// } from 'recharts';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// const DomainStats = () => {
//   // Sample data for statistics (replace with real data as needed)
//   const data = [
//     {
//       domain: "example.com",
//       label: "Safe",
//       category: "Blog",
//       entropy: 4.2,
//       digitRatio: 0.3,
//       length: 11,
//       specialChars: 0,
//       containsSensitiveWords: false,
//       metaData: "Good",
//       mainstreamDomain: true,
//       notes: "None",
//       lastUpdate: "2024-12-10",
//     },
//     {
//       domain: "test-site.org",
//       label: "Suspicious",
//       category: "E-commerce",
//       entropy: 5.7,
//       digitRatio: 0.5,
//       length: 15,
//       specialChars: 2,
//       containsSensitiveWords: true,
//       metaData: "Missing",
//       mainstreamDomain: false,
//       notes: "Check details",
//       lastUpdate: "2024-12-11",
//     },
//     {
//       domain: "secure-domain.net",
//       label: "Safe",
//       category: "Service",
//       entropy: 4.8,
//       digitRatio: 0.4,
//       length: 18,
//       specialChars: 1,
//       containsSensitiveWords: false,
//       metaData: "Good",
//       mainstreamDomain: true,
//       notes: "Verified",
//       lastUpdate: "2024-12-12",
//     }
//   ];

//   // Calculating statistics
//   const totalDomains = data.length;
//   const averageEntropy = (
//     data.reduce((sum, item) => sum + item.entropy, 0) / totalDomains
//   ).toFixed(2);
//   const averageLength = (
//     data.reduce((sum, item) => sum + item.length, 0) / totalDomains
//   ).toFixed(2);
//   const sensitiveWordsCount = data.filter(
//     (item) => item.containsSensitiveWords
//   ).length;
//   const mainstreamDomainsCount = data.filter(
//     (item) => item.mainstreamDomain
//   ).length;

//   // Data for Entropy Bar Chart
//   const entropyData = data.map(item => ({
//     domain: item.domain,
//     entropy: item.entropy
//   }));

//   // Data for Domain Label Pie Chart
//   const labelData = [
//     { 
//       name: 'Safe', 
//       value: data.filter(item => item.label === 'Safe').length 
//     },
//     { 
//       name: 'Suspicious', 
//       value: data.filter(item => item.label === 'Suspicious').length 
//     }
//   ];

//   // Colors for Pie Chart
//   const COLORS = ['#00C49F', '#FF6384'];

//   return (
//     <div className="p-4 space-y-6">
//       <h2 className="text-2xl font-bold mb-4">Domain Statistics</h2>
      
//       {/* Overview Stats Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Total Domains</CardTitle>
//           </CardHeader>
//           <CardContent>{totalDomains}</CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Avg Entropy</CardTitle>
//           </CardHeader>
//           <CardContent>{averageEntropy}</CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Avg Length</CardTitle>
//           </CardHeader>
//           <CardContent>{averageLength}</CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Sensitive Word Domains</CardTitle>
//           </CardHeader>
//           <CardContent>{sensitiveWordsCount}</CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Mainstream Domains</CardTitle>
//           </CardHeader>
//           <CardContent>{mainstreamDomainsCount}</CardContent>
//         </Card>
//       </div>

//       {/* Visualization Section */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {/* Entropy Bar Chart */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Domain Entropy Distribution</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <BarChart width={400} height={250} data={entropyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="domain" />
//               <YAxis label={{ value: 'Entropy', angle: -90, position: 'insideLeft' }} />
//               <Tooltip />
//               <Bar dataKey="entropy" fill="#8884d8" />
//             </BarChart>
//           </CardContent>
//         </Card>

//         {/* Domain Label Pie Chart */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Domain Label Distribution</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <PieChart width={400} height={250}>
//               <Pie
//                 data={labelData}
//                 cx={200}
//                 cy={125}
//                 labelLine={false}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//                 label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
//               >
//                 {labelData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DomainStats;

// File: domain-stats.tsx

import React from "react";

const DomainStats = () => {
  // Sample data for statistics (replace with real data as needed)
  const data = [
    {
      domain: "example.com",
      label: "Safe",
      category: "Blog",
      entropy: 4.2,
      digitRatio: 0.3,
      length: 11,
      specialChars: 0,
      containsSensitiveWords: false,
      metaData: "Good",
      mainstreamDomain: true,
      notes: "None",
      lastUpdate: "2024-12-10",
    },
    {
      domain: "test-site.org",
      label: "Suspicious",
      category: "E-commerce",
      entropy: 5.7,
      digitRatio: 0.5,
      length: 15,
      specialChars: 2,
      containsSensitiveWords: true,
      metaData: "Missing",
      mainstreamDomain: false,
      notes: "Check details",
      lastUpdate: "2024-12-11",
    },
  ];

  // Calculating statistics
  const totalDomains = data.length;
  const averageEntropy = (
    data.reduce((sum, item) => sum + item.entropy, 0) / totalDomains
  ).toFixed(2);
  const averageLength = (
    data.reduce((sum, item) => sum + item.length, 0) / totalDomains
  ).toFixed(2);
  const sensitiveWordsCount = data.filter(
    (item) => item.containsSensitiveWords
  ).length;
  const mainstreamDomainsCount = data.filter(
    (item) => item.mainstreamDomain
  ).length;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Thống kê Tên miền</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded shadow">
          <p className="font-bold">Tổng số tên miền:</p>
          <p>{totalDomains}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <p className="font-bold">Entropy trung bình:</p>
          <p>{averageEntropy}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <p className="font-bold">Độ dài trung bình:</p>
          <p>{averageLength}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <p className="font-bold">Tên miền chứa từ nhạy cảm:</p>
          <p>{sensitiveWordsCount}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <p className="font-bold">Tên miền chính thống:</p>
          <p>{mainstreamDomainsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DomainStats;

