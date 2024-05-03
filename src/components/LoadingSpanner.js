import React from "react";
import { Spinner } from "react-bootstrap";

export default function LoadingSpanner() {
  return (
    <div class="loading-spinner">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}
