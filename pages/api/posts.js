import { prisma } from '../../utils/prisma';
import slugify from 'slugify';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    const { title, content } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          create: {
            email: `${slugify(title)}@gmail.com`,
          },
        },
      },
    });

    return res.status(201).json(post);
  }
}
