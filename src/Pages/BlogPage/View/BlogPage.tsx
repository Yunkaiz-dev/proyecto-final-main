import React from 'react';
import { Layout, Menu, Typography, Input, Card, Image, Button, Row, Col } from 'antd';
import '/Users/jean carlos/Desktop/Learning Progran/proyecto-final-main/src/Styles/Global.css';
import { Link, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Search } = Input;

// Datos de ejemplo para las recetas
const recipes = [
  {
    id: 1,
    title: 'Sancocho Dominicano',
    description: 'Un guiso espeso y sabroso preparado con diferentes tipos de carne (res, cerdo, pollo), víveres como yuca, plátano y ñame, sazonado con especias y hierbas aromáticas.',
    image: '/src/assets/images/Sancocho Dominicano Recipe - Poised Finance & Lifestyle.jpeg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Mangú',
    description: 'Un puré de plátanos verdes hervidos, servido con cebolla roja salteada en vinagre, queso frito, salami y huevo frito. Es un desayuno típico dominicano',
    image: '/src/assets/images/how-to-make-mangu-DSC6702 (1).jpg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Mofongo',
    description: 'Hecho a base de plátanos verdes fritos y majados con ajo, chicharrón y aceite de oliva. Se sirve con caldo y puede incluir camarones, pollo o carne',
    image: '/src/assets/images/Food Stylist.jpeg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'La Bandera Dominicana –',
    description: 'Es el plato más representativo de la República Dominicana, compuesto por arroz blanco, habichuelas guisadas y carne (pollo, res o cerdo), acompañado de ensalada y plátanos fritos.',
    image: '/src/assets/images/ARROZ-HABICHUELA-CARNE-@bar_dona_luz-edited.jpg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Pastelón de Plátano Maduro',
    description: 'Similar a una lasaña, este plato se elabora con capas de plátano maduro majado, carne molida sazonada y queso derretido, horneado hasta que quede dorado y cremoso.',
    image: '/src/assets/images/Pastelón de Plátano Maduro.jpeg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Locrio',
    description: 'Un arroz guisado similar a la paella, preparado con carne (pollo, cerdo, longaniza o mariscos) y sazonado con especias dominicanas.',
    image: '/src/assets/images/Dominican Moro-Locrio.jpeg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Moro de Guandules con Coco',
    description: 'Un arroz mezclado con guandules (gandules) y leche de coco, muy popular en la región este del país.',
    image: '/src/assets/images/Naihomy’s Dominican Moro de Guandules or Pigeon Peas & Rice, Flipped to Healthy – Familia Kitchen.jpeg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Chenchén',
    description: 'Plato típico del sur del país, hecho con maíz molido y cocido con leche de coco, servido con chivo guisado.',
    image: '/src/assets/images/Chenchén_ Recipe of the Flavorful Dominican Cracked Corn Pilaf.jpeg',
    content: 'Receta completa aquí...'
  }
  // Agrega más recetas según necesites
];

//Agregar mas  postres 

const recipesPostre = [
  {
    id: 1,
    title: 'Arepa Dominicana',
    description: 'En la gastronomía dominicana, la arepa es un pastel horneado a base de harina de maíz, leche de coco, azúcar y especias. Su textura es densa y ligeramente húmeda, con un sabor dulce y aromático. ',
    image: '/src/assets/images/Arepa Dominicana [Receta + Video] Arepa Dulce.jpeg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Arroz con Leche',
    description: 'Es un postre cremoso preparado con arroz, leche, azúcar y especias como canela y clavo dulce. Se cocina a fuego lento hasta que el arroz absorbe la leche y adquiere una textura suave',
    image: '/src/assets/images/Arroz con Leche Dominicano.jpeg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Dulce de Platano',
    description: 'Es un postre tradicional preparado con plátanos maduros en rodajas, cocidos con azúcar, canela, clavo dulce y a veces un toque de leche o vainilla.',
    image: '/src/assets/images/Fried Sweet Plantain Slices (Plátanos Maduros Fritos).jpeg',
    content: 'Receta completa aquí...'
  },
  {
    id: 2,
    title: 'Habichuelas con Dulce ',
    description: ' Un postre tradicional dominicano hecho con habichuelas rojas, leche, azúcar, canela, batata y pasas, servido frío o caliente, especialmente en Semana Santa.',
    image: '/src/assets/images/Postres Dominicanos Tradicionales Más Populares.jpeg',
    content: 'Receta completa aquí...'
  }
];



const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (recipeId: number) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <Layout className="layout">
        <Header style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
            }}>
            {/* Logo */}
            <div className="logo" style={{ marginRight: '20px' }}>
            <Title level={3} style={{ color: 'white', margin: 0 }}>Dominican Delights
            </Title>
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
                <Menu.Item key="5">
                <Link to="/registro">Registro</Link>
                </Menu.Item>
            </Menu>
            </div>
        </div>
        </Header>

      <Content style={{ padding: '0 50px' }}>
        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '30px' }}>
          <Title level={1}>El Blog The Dominican Delights</Title>
          <Paragraph>Descubre nuestra colección de recetas tradicionales</Paragraph>
        </div>

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
                onClick={() => handleCardClick(recipe.id)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Meta
                  title={recipe.title}
                  description={recipe.description}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '30px' }}>
          <Title level={1}>Postres</Title>
          <Paragraph>Descubre nuestros mejores postres tradicionales</Paragraph>
        </div>

        <Row gutter={[16, 16]} style={{ marginBottom: '30px' }}>
          {recipesPostre.map((recipesPostre) => (
            <Col xs={24} sm={12} md={8} lg={6} key={recipesPostre.id}>
              <Card
                hoverable
                cover={
                  <Image
                    alt={recipesPostre.title}
                    src={recipesPostre.image}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    preview={false}
                  />
                }
                onClick={() => handleCardClick(recipesPostre.id)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Meta
                  title={recipesPostre.title}
                  description={recipesPostre.description}
                />
              </Card>
            </Col>
          ))}
        </Row>



      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Dominican Delight © {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default BlogPage;