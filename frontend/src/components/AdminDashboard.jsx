import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` }
            };
            const [statsRes, ordersRes] = await Promise.all([
                axios.get('http://localhost:8080/api/admin/stats', config),
                axios.get('http://localhost:8080/api/admin/orders', config)
            ]);
            setStats(statsRes.data);
            setOrders(ordersRes.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching admin data:', error);
            setLoading(false);
        }
    };

    const updateStatus = async (orderId, newStatus) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` }
            };
            await axios.put(`http://localhost:8080/api/admin/orders/${orderId}/status?status=${newStatus}`, {}, config);
            fetchData();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    if (loading) return <div className="admin-loading">Loading Dashboard...</div>;

    return (
        <div className="admin-dashboard section">
            <div className="container">
                <h1 className="admin-title">Admin Dashboard</h1>

                <div className="stats-grid">
                    <div className="stat-card card">
                        <h3>Total Orders</h3>
                        <p className="stat-value">{stats?.totalOrders}</p>
                    </div>
                    <div className="stat-card card">
                        <h3>Total Revenue</h3>
                        <p className="stat-value">Rs.{stats?.totalRevenue?.toFixed(2)}</p>
                    </div>
                    <div className="stat-card card">
                        <h3>Total Customers</h3>
                        <p className="stat-value">{stats?.totalCustomers}</p>
                    </div>
                </div>

                <div className="orders-section">
                    <h2>Recent Orders</h2>
                    <div className="orders-table-wrapper card">
                        <table className="orders-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td>#{order.id}</td>
                                        <td>{order.customerName}</td>
                                        <td>Rs.{order.totalAmount.toFixed(2)}</td>
                                        <td>
                                            <span className={`status-badge ${order.status.toLowerCase()}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td>
                                            <select
                                                value={order.status}
                                                onChange={(e) => updateStatus(order.id, e.target.value)}
                                                className="status-select"
                                            >
                                                <option value="PENDING">Pending</option>
                                                <option value="PREPARING">Preparing</option>
                                                <option value="COMPLETED">Completed</option>
                                                <option value="CANCELLED">Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
