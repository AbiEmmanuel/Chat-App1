import React from 'react';
import Contact from './Contact';

const Users = [
  {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    online: false
  },
  {
    name: 'Loletta Caldwell',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    online: true
  },
  {
    name: 'Vernon Mason',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    online: false
  },
  {
    name: 'Erica Hunt',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    online: false
  },
  {
    name: 'Miguel Robertson',
    avatar: 'https://randomuser.me/api/portraits/men/53.jpg',
    online: true
  }
];

const ContactList = () => (
  <div>
    {Users.map(contact => (<Contact {...contact}/> ))}
  </div>
);

export default ContactList;