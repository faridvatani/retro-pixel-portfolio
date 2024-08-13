export interface Skills {
  name: string;
  level: number;
}

export interface Projects {
  name: string;
  description: string;
  status: string;
}

export interface Certification {
  name: string;
  status: string;
  statusVariant: "dark" | "primary" | "success" | "warning" | "error";
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
  position: "left" | "right";
}
