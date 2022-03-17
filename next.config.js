/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env:{
    mongodburl:'mongodb+srv://harshavardhanakrishnachaitanya:harshaharsha@cluster0.spccm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  }
}
