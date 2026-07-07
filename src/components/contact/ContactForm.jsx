import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = () => {
    toast.success('Thank you. The institute team will contact you soon.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-card border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}><input {...register('name', { required: 'Name is required' })} className="input" /></Field>
        <Field label="Phone" error={errors.phone?.message}><input {...register('phone', { required: 'Phone is required' })} className="input" /></Field>
        <Field label="Email"><input type="email" {...register('email')} className="input" /></Field>
        <Field label="Interest"><select {...register('interest')} className="input"><option>Special School Admission</option><option>Therapy Support</option><option>Professional Courses</option><option>General Enquiry</option></select></Field>
        <Field label="Message" className="sm:col-span-2"><textarea {...register('message')} rows="5" className="input resize-none" /></Field>
      </div>
      <Button className="mt-6" type="submit">Submit Enquiry</Button>
    </form>
  );
}

function Field({ label, error, children, className }) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-bold text-dark">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  );
}
