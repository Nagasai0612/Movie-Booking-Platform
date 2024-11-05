import React, { useState } from 'react';
import styled from 'styled-components';

const Profile = () => {
    // Sample user data
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...user });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);
        setIsEditing(false);
    };

    return (
        <Container>
            <h2>My Profile</h2>
            {isEditing ? (
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Name:
                        <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label>
                        Email:
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label>
                        Phone:
                        <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label>
                        Bio:
                        <Textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Button type="submit">Save Changes</Button>
                    <Button type="button" onClick={() => setIsEditing(false)}>Cancel</Button>
                </Form>
            ) : (
                <ProfileInfo>
                    <Info><strong>Name:</strong> {user.name}</Info>
                    <Info><strong>Email:</strong> {user.email}</Info>
                    <Info><strong>Phone:</strong> {user.phone}</Info>
                    <Info><strong>Bio:</strong> {user.bio}</Info>
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                </ProfileInfo>
            )}
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    max-width: 600px;
    margin: 75px auto;
    padding: 75px;
    background: #1d1f27;
    border-radius: 8px;
    color: white;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 10px;
`;

const Input = styled.input`
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    color: #000;
`;

const Textarea = styled.textarea`
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    color: #000;
`;

const Button = styled.button`
    padding: 10px;
    margin-top: 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Info = styled.p`
    margin: 5px 0;
`;
