import { render } from '@redwoodjs/testing'

import BlogLayoutLayout from './BlogLayoutLayout'

describe('BlogLayoutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogLayoutLayout />)
    }).not.toThrow()
  })
})
