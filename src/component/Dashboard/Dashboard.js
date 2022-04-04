import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    console.log(data);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='container'>
            <div className='row py-5'>
                <div className="col-12 sol-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h5>Chart: 01</h5>
                    <div className='border border-2 p-4'>
                        <ComposedChart width={500} height={250} data={data}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                        </ComposedChart>
                    </div>
                </div>
                <div className="col-12 sol-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h5>Chart: 02</h5>
                    <div className='border border-2 p-4'>
                        <RadarChart outerRadius={90} width={500} height={250} data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="month" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                            <Radar name="Mike" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Radar name="Lily" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                            <Legend />
                        </RadarChart>
                    </div>
                </div>
            </div>
            <div className='row py-5'>
                <div className="col-12 sol-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h5>Chart: 03</h5>
                    <div className='border border-2 p-4'>
                        <LineChart width={500} height={250} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                </div>
                <div className="col-12 sol-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h5>Chart: 04</h5>
                    <div className='border border-2 p-4'>
                        <AreaChart width={500} height={250} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;