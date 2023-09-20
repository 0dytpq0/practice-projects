import { Button } from '../../theme/daisyui'

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-3xl text-center">Basic</h2>
      <div className="mt-4 flex justify-evenly">
        <Button className="btn-lg btn-primary">Button</Button>
        <Button className="btn-md btn-primary">Button</Button>
        <Button className="btn-sm btn-primary">Button</Button>
        <Button className="btn-xs btn-primary">Button</Button>
      </div>
    </section>
  )
}
