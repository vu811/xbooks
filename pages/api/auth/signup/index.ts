import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
const models = require('../../../../database/models');
const User = models.User;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    //console.log('req', req)
    if (req.method === 'POST') {

        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            email: email,
            hashedPassword: hashedPassword
        };
        //console.log('newUser', models)
        const user = await User.create(newUser);
        res.status(201).json(user);
    }
    else {
        res.status(200).json({ name: 'John Doe' })
    }
}
