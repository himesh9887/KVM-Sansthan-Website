import SEO from '@/components/common/SEO';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The requested page could not be found." path="/404" noIndex />
      <section className="grid min-h-screen place-items-center bg-background pt-24">
        <Container className="text-center">
          <p className="font-numbers text-8xl font-extrabold text-primary">404</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-dark">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-muted">The page may have moved. Return to the homepage and continue exploring the institute.</p>
          <Button to="/" className="mt-8">Back Home</Button>
        </Container>
      </section>
    </>
  );
}


