import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Carousel, Image, Typography, Card, Row, Col, Input} from 'antd';
import '/Users/Jose-PC/Downloads/proyecto Omar/src/Styles/global.css'
import { Link  } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Search } = Input;

const items = Array.from({ length: 15 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const carouselImages = [
  '/src/assets/images/1.webp',
  '/src/assets/images/2.webp',
  '/src/assets/images/3.webp',
  '/src/assets/images/4.webp'
];

const recipes = [

  {
    id: 1,
    title: 'Los Secretos del Sofrito Perfecto',
    description: '"Aprende a preparar la base de sabores de la cocina dominicana: proporciones, técnicas y conservación."',
    image: '/src/assets/images/DALL·E 2025-03-25 18.48.49 - A small bowl filled with fresh sofrito ingredients, including chopped onions, garlic, cilantro, and colorful bell peppers. The ingredients appear fres.webp',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Cómo Dominar el Fuego en la Cocina',
    description: '"¿Alto o bajo? Guía rápida para controlar la temperatura según el plato (mangú vs. carne frita)."',
    image: '/src/assets/images/DALL·E 2025-03-25 18.49.52 - A rustic pot on medium heat with a bubbling Dominican sancocho stew. The pot is filled with chunks of meat, corn, yuca, plantains, and vibrant vegetab.webp',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Trucos para Plátanos Dorados y Crujientes',
    description: '"Evita que se peguen o queden aceitosos con estos consejos de freído y selección de plátanos."',
    image: '/src/assets/images/DALL·E 2025-03-25 18.51.55 - A high-resolution image of perfectly fried Dominican tostones (twice-fried green plantains) and maduros (sweet fried plantains). The tostones are gold.webp',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Utensilios que Toda Cocina Dominicana Necesita –',
    description: '"Los imprescindibles para lograr autenticidad (y dónde comprarlos si no los tienes)."',
    image: '/src/assets/images/DALL·E 2025-03-25 18.53.06 - A high-resolution image of traditional Dominican kitchen tools_ a well-seasoned cast-iron caldero (pot) with a rustic, worn look, a wooden pilón (mort.webp',
    content: 'Receta completa aquí...'
  }
];



const MainPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout>
      <Header style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
            }}>
            {/* Logo */}
            <div className="logo" style={{ marginRight: '20px' }}>
            <Title level={3} style={{ color: 'white', margin: 0 }}>Dominican Delights</Title>
            </div>

            {/* Menú principal + Botones derecha */}
         <div style={{ 
            display: 'flex', 
            flexGrow: 1, 
            justifyContent: 'space-between', 
            alignItems: 'center' 
            }}>
            {/* Menú Navegación */}
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ flex: 1, borderBottom: 'none' }}
            >
            <Menu.Item key="1">
                <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/recetas">Recetas</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/blog">Blog</Link>
            </Menu.Item>
            </Menu>

            {/* Contenedor derecha (Buscador + Auth) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Search
                placeholder="Búsqueda"
                onSearch={(value) => console.log(value)}
                style={{ width: 200 }}
            />
            
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[]}
                style={{ borderBottom: 'none' }}
            >
                <Menu.Item key="4">
                <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
            </div>
        </div>
        </Header>
      <Content style={{ padding: '0 0px' }}>
        
        <div style={{ 

      width: '100vw', // Ocupa el ancho completo del viewport
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
      }}>
      <Carousel 
        autoplay 
        effect="fade"
        dotPosition="bottom"
        style={{
          marginBottom: 24,
          borderRadius: borderRadiusLG,
          overflow: 'hidden'
        }}
      >
      {carouselImages.map((img, index) => (
        <div key={index}>
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            preview={false}
            style={{
              width: '100%',
              minHeight: '70vh',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
        </div>
      ))}
    </Carousel>
  </div>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            textAlign:'center'
        
          }}
        >
          <Title >Bienvenidos a Dominican Delights </Title>
          <Paragraph>
            ¿Listo para cocinar con alma dominicana? ¡Sube el fuego y vamos!
          </Paragraph>

          <Row gutter={[16, 16]} style={{ marginBottom: '30px' }}>
          {recipes.map((recipe) => (
            <Col xs={24} sm={12} md={8} lg={6} key={recipe.id}>
              <Card
                hoverable
                cover={
                  <Image
                    alt={recipe.title}
                    src={recipe.image}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    preview={false}
                  />
                }  
              >
                <Card.Meta
                  title={recipe.title}
                  description={recipe.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
        </div>


      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainPage;