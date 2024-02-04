import { TechStack } from '@/components/techStack'
interface ProjectDataProps {
  title: string
  description: string
  imgSrc: string
  href: string
  techStack: TechStack[]
}

const projectsData: ProjectDataProps[] = [
  {
    title: 'Rút gọn link: Rút ngắn liên kết của bạn',
    description:
      'Rút gọn link là 1 công cụ rút ngắn liên kết trực tuyến. Nó được viết bằng ngôn ngữ PHP, cho phép bạn rút gọn những liên kết dài thành liên kết ngắn một cách nhanh chóng. Ngoài ra nó còn có API, giúp hỗ trợ người dùng tốt hơn.',
    href: 'https://dtdung.free.nf',
    imgSrc: '/static/images/rut-gon-link.png',
    techStack: ['PHP', 'Html', 'Css', 'JavaScript'],
  },
  {
    title: 'Paste: Lưu trữ nội dung trực tuyến',
    description:
      'Paste là 1 công cụ mã nguồn mở, được viết bàng ngôn ngữ PHP. Nó cho phép bạn lưu trữ những văn bản thường, hoặc là những đoạn mã code với đa dạng các định dạng code khác nhau. Ngoài ra Paste có chức năng đăng ký User, bạn cũng có thể chia sẻ đoạn mã và cho phép người khác góp ý, thảo luận.',
    href: 'https://leomessi.rf.gd',
    imgSrc: '/static/images/paste.png',
    techStack: ['PHP', 'Html', 'Css', 'JavaScript'],
  },
  {
    title: 'Ghi chú 1 lần: Tạo ra ghi chú tự huỷ sau khi đọc',
    description:
      'Ghi chú 1 lần là một công cụ tạo ghi chú trực tuyến. Nó có chức năng tự huỷ ghi chú sau khi có một ai khác đọc xong, bạn có thể tạo ghi chú và chia sẻ liên kết ghi chú cho người khác. Ngoài ra nó còn có chức năng thông báo về Email của chủ sở hữu ghi chú khi có ai đó đọc xong ghi chú và còn nhiều tính năng khác.',
    imgSrc: '/static/images/ghi-chu-1-lan.png',
    href: 'http://cristiano.rf.gd',
    techStack: ['PHP', 'Html', 'Css', 'JavaScript'],
  },
  {
    title: 'Stikked: Một công cụ lưu trữ mã Code',
    description: `Tương tự như Paste, Stikked là một công cụ trực tuyến có chức năng lưu trữ mã Code và các loại văn bản...Stikked còn có chức năng tạo ra QR của mỗi liên kết, điều mà Paste không có. Nhưng nó không có chức năng tạo User như Paste.`,
    imgSrc: '/static/images/stikked.png',
    href: 'http://cristiano.rf.gd/code',
    techStack: ['PHP', 'Html', 'Css', 'JavaScript'],
  },
  // {
  //   title: 'PDF Assistant: AI Powered Q&A for PDFs',
  //   description: `Built a PDF Assistant tool using OpenAI's LLM to answer questions from uploaded PDF files. It has a user-friendly web interface with StreamLit, Firebase authentication for security, real-time updates via Firebase, a guest mode for no authentication, and easy Docker deployment.`,
  //   imgSrc: '/static/images/PDF_Assistant.png',
  //   href: 'https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-PDF-Assistant-Docker',
  //   techStack: ['Python', 'Streamlit', 'Docker', 'Firebase'],
  // },
  // {
  //   title: 'GFPGAN Streamlit App: Face Restoration',
  //   description: `Created a Streamlit app for the GFPGAN model to restore faces in images. It has a user-friendly interface, and easy Docker deployment.`,
  //   imgSrc: '/static/images/GFPGAN.png',
  //   href: 'https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-GFPGAN',
  //   techStack: ['Python', 'Streamlit', 'Docker'],
  // },
  // {
  //   title: 'College Student API: FastAPI with MongoDB',
  //   description: `Developed a high-performance API using FastAPI and MongoDB Cloud Database for managing college student information. It includes CRUD operations and secure data handling. The API is deployed with Docker for easy setup and scalability.`,
  //   imgSrc: '/static/images/FastAPI_MongDB.png',
  //   href: 'https://huggingface.co/spaces/PrabhuKiranKonda/fastapi_mongoDB',
  //   techStack: ['Python', 'FastAPI', 'MongoDB', 'Docker'],
  // },
]

export default projectsData
