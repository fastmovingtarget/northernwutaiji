import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Layout from './Layout';
import { Outlet, useNavigate, useLocation } from "react-router";

let mock__currentPage = "/"

jest.mock('react-router', () => {
  return {
      __esModule: true,
      useNavigate:() => { return jest.fn(inputPath => {mock__currentPage = inputPath});},
      useLocation: () => {return {pathname:mock__currentPage}},
      Outlet: jest.fn(),
      default: jest.fn()
  }
});

test('renders layout successfully', () => {
  render(<Layout />);
  
  const homeNavElement = screen.getByText(/Home/i);
  expect(homeNavElement).toBeInTheDocument();
  const formNavElement = screen.getByText(/Forms/i);
  expect(formNavElement).toBeInTheDocument();
  const qiGongNavElement = screen.getByText(/QiGong/i);
  expect(qiGongNavElement).toBeInTheDocument();
  const applicationsNavElement = screen.getByText(/Applications/i);
  expect(applicationsNavElement).toBeInTheDocument();
  const foundationsNavElement = screen.getByText(/Foundations/i);
  expect(foundationsNavElement).toBeInTheDocument();
  const informationNavElement = screen.getByText(/About/i);
  expect(informationNavElement).toBeInTheDocument();
});

describe("Nav bar directs correctly", () => {
  test("Clicking 'Home' navigates to home page", async () => {
    render(<Layout />);
  
    const user = userEvent.setup();
  
    const homeNavElement = screen.getByText(/Home/i);
    expect(homeNavElement).toBeInTheDocument();
  
    await user.click(homeNavElement);
  
    expect(mock__currentPage).toEqual("/Home")
  })
  test("Clicking 'Form' navigates to form page", async () => {
    render(<Layout />);
  
    const user = userEvent.setup();
  
    const formNavElement = screen.getByText(/Forms/i);
    expect(formNavElement).toBeInTheDocument();
  
    await user.click(formNavElement);
  
    expect(mock__currentPage).toEqual("/Forms")
  })
  test("Clicking 'QiGong' navigates to qigong page", async () => {
    render(<Layout />);
  
    const user = userEvent.setup();
  
    const qiGongNavElement = screen.getByText(/QiGong/i);
    expect(qiGongNavElement).toBeInTheDocument();
  
    await user.click(qiGongNavElement);
  
    expect(mock__currentPage).toEqual("/QiGong")
  })
  test("Clicking 'Applications' navigates to applications page", async () => {
    render(<Layout />);
  
    const user = userEvent.setup();
  
    const applicationsNavElement = screen.getByText(/Applications/i);
    expect(applicationsNavElement).toBeInTheDocument();
  
    await user.click(applicationsNavElement);
  
    expect(mock__currentPage).toEqual("/Applications")
  })
  test("Clicking 'Foundations' navigates to foundations page", async () => {
    render(<Layout />);
  
    const user = userEvent.setup();
  
    const foundationsNavElement = screen.getByText(/Foundations/i);
    expect(foundationsNavElement).toBeInTheDocument();
  
    await user.click(foundationsNavElement);
  
    expect(mock__currentPage).toEqual("/Foundations")
  })
  test("Clicking 'About' navigates to Information page", async () => {
    render(<Layout />);
  
    const user = userEvent.setup();
  
    const informationNavElement = screen.getByText(/About/i);
    expect(informationNavElement).toBeInTheDocument();
  
    await user.click(informationNavElement);
  
    expect(mock__currentPage).toEqual("/Information")
  })
})

test("Renders Header and title", () => {
  render(<Layout/>)

  const titleElement = screen.getByText("Northern Wu Taiji");
  expect(titleElement).toBeInTheDocument();

  const imageElement = screen.getByAltText("Taijutu representing Taijiquan")
  expect(imageElement).toBeInTheDocument();
})
