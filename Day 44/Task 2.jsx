function Premium() {
  const isPremiumUser = true;

  return (
    <>
      {isPremiumUser && <button>Premium Access</button>}
    </>
  );
}